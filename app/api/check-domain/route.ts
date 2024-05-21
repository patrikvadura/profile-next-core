// app/api/check-domain/route.ts
import { NextRequest, NextResponse } from 'next/server';
//@ts-ignore
import whois from 'whois';

export async function POST(request: NextRequest) {
    const { domain } = await request.json();

    if (!domain) {
        return NextResponse.json({ error: 'Doménové jméno je již registrováno.' }, { status: 400 });
    }

    return new Promise((resolve) => {
        //@ts-ignore
        whois.lookup(domain, (err, data) => {
            if (err) {
                resolve(NextResponse.json({ error: 'Problém při kontrole domény.' }, { status: 500 }));
                return;
            }

            // Enhanced logic to determine if the domain is registered or not
            const isRegistered = !/No match for|NOT FOUND|No entries found|is free/.test(data);

            resolve(NextResponse.json({ available: !isRegistered }, { status: 200 }));
        });
    });
}
