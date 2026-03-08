import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const SocialLinks = () => {
  const socials = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/mundopequearte',
      color: 'hover:bg-pink-500'
    },
    {
      name: 'Facebook',
      icon: FaFacebookF,
      url: 'https://facebook.com/mundopequearte',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      url: 'https://tiktok.com/@mundopequearte',
      color: 'hover:bg-black'
    }
  ];

  return (
    <div className="flex gap-4 justify-center">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-brand-lavender text-white p-4 rounded-full transition-all duration-300 ${social.color} transform hover:scale-110`}
          aria-label={social.name}
        >
          <social.icon className="text-2xl" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
