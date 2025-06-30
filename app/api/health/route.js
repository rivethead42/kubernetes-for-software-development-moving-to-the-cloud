export async function GET() {
  return Response.json(
    { 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      service: 'xerxes-international'
    },
    { status: 200 }
  );
} 