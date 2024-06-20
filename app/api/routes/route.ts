// app/api/routes/route.ts

import { NextRequest, NextResponse } from 'next/server';
import getRoutes from '@/actions/get-routes';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const day = searchParams.get('day') ?? undefined;
  const startCityId = searchParams.get('startCityId') ?? undefined;
  const endCityId = searchParams.get('endCityId') ?? undefined;
  const stopsId = searchParams.getAll('stopsId').length ? searchParams.getAll('stopsId') : undefined;
  const price = searchParams.get('price') ? parseFloat(searchParams.get('price')!) : undefined;

  try {
    const routes = await getRoutes({ day, startCityId, endCityId, stopsId, price });
    return NextResponse.json(routes, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
