import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Eastgate Venture Holdings - Strategic Venture Capital';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '900px',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              marginBottom: 20,
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Eastgate
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 'normal',
              marginBottom: 40,
              opacity: 0.9,
            }}
          >
            Strategic Venture Capital
          </div>
          <div
            style={{
              fontSize: 20,
              opacity: 0.8,
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            Driving innovation through strategic investments in emerging markets and transformative technologies
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}