import Support from './Support';

const items = [
    {
      title: 'Sales',
      description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
      icon: 'phone'
    },
    {
      title: 'Technical Support',
      description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
      icon: 'cog'
    },
    {
      title: 'Media Inquiries',
      description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
      icon: 'newspaper'
    }
  ];

const SupportHover = () => {
  return (
    <div className="mx-auto max-w-5xl px-8 py-12 bg-gray-900 text-white ">
        <h1 className="text-center text-5xl font-bold mb-10">Support Center</h1>
      <Support items={items} />
    </div>
  );
};

export default SupportHover;
