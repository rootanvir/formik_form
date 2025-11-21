import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const filePath = path.join(process.cwd(), 'public', 'saved', 'signup.json');

export async function POST(request: Request) {
  try {
    const user = await request.json();

    let users: any[] = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      users = JSON.parse(data);
    }

    const hashedPassword = crypto
      .createHash('md5')
      .update(user.password)
      .digest('hex');

    users.push({
      fullName: user.fullName,
      age: user.age,
      gender: user.gender,
      phone: user.phone,
      email: user.email,
      password: hashedPassword,
      signedUpAt: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}