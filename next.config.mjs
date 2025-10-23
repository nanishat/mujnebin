/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/mujnebin-resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="mujnebin-resume.pdf"',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};

export default nextConfig;