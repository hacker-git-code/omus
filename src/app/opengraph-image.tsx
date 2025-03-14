import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'NEXUS AI - Advanced AI Agents Company';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(224, 122, 95, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(224, 122, 95, 0.2) 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            marginBottom: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#e07a5f',
              borderRadius: '50%',
              fontSize: 32,
              fontWeight: 700,
              color: 'white',
              marginRight: 16
            }}
          >
            N
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              background: 'white',
              backgroundClip: 'text',
              color: 'transparent',
              marginRight: 8,
            }}
          >
            NEXUS
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              background: 'linear-gradient(to right, #e07a5f, #d57f6b)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AI
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              letterSpacing: -2,
              backgroundImage: 'linear-gradient(to bottom right, #fff, #ccc)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 24,
              textAlign: 'center'
            }}
          >
            Advanced AI Agents
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#888',
              maxWidth: 800,
              textAlign: 'center',
              lineHeight: 1.4
            }}
          >
            Building the future of AI with intelligent agents that transform the way we work
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            color: '#666',
            fontSize: 20,
          }}
        >
          nexusai.com
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 8,
            background: 'linear-gradient(to right, #e07a5f, #d57f6b)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
