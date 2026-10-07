export const siteMetadata = {
  title: 'S Mujnebin',
  description: 'Persistent by nature, driven by results',
}

export const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Data Science Specialist',
]

export const navigationLinks = [
  { label: 'About me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact me', href: '#contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/nanishat' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mujnebin-safiul/',
  },
  {
    label: 'Discord',
    href: 'https://discord.com/users/702535873450999838',
  },
]

export const profileLinks = socialLinks.filter(
  ({ label }) => label === 'GitHub' || label === 'LinkedIn',
)

export const profile = {
  name: 'Safiul Mujnebin',
  location: 'Dhaka, Bangladesh',
  email: 'mujnebinsafiul@gmail.com',
  resume: '/mujnebin-resume.pdf',
}