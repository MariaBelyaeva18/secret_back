import { Inject, Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
  constructor(@Inject('PG_CONNECTION') private conn: any) {}

  private readonly algorithm = 'aes-256-cbc';

  private readonly key = crypto.randomBytes(32); // 256 бит

  private readonly iv = crypto.randomBytes(16); // 128 бит

  encryptMessage(message: string) {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  decryptMessage(encryptedMessage: string, key: any, iv: any): string {
    const decipher = crypto.createDecipheriv(this.algorithm, key, iv);
    let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  async saveMessage(dto: MessageDto): Promise<string> {
    const keyString = this.key.toString('hex');
    const ivString = this.iv.toString('hex');
    await this.conn.query(
      'INSERT INTO messages (message, keys, iv, route) VALUES ($1, $2, $3, $4)',
      [this.encryptMessage(dto.message), keyString, ivString, dto.route],
    );
    return 'Message is sent';
  }

  async getMessage(route: string) {
    const { rows } = await this.conn.query(
      'SELECT message, keys, iv FROM messages WHERE route = $1',
      [route],
    );
    const keyBuffer = Buffer.from(rows[0].keys, 'hex');
    const ivBuffer = Buffer.from(rows[0].iv, 'hex');
    return this.decryptMessage(rows[0].message, keyBuffer, ivBuffer);
  }
}
