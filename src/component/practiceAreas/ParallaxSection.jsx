import pattern from '../../assets/images/hero-pattern.png';

const ParallaxSection = () => {
	return (
		<section
			className='h-44 bg-fixed bg-center bg-cover flex items-center justify-center text-white text-4xl '
			style={{
				backgroundImage: `url(${pattern})`,
				backgroundSize: '35%',
			}}></section>
	);
};

export default ParallaxSection;
