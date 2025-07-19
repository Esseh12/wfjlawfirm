import Hero from '../component/Contact/hero';
import { blogData } from '../component/data';
import img1 from '../assets/images/blog-img1.png';
import img2 from '../assets/images/blog-img2.png';
import img3 from '../assets/images/blog-img3.png';

// Topics data - easily manage sidebar topics
const topicsData = [
	{ name: 'Attorneys', count: 3 },
	{ name: 'Auto Accidents', count: 2 },
	{ name: 'Bankruptcy', count: 3 },
	{ name: 'Becoming a Landlord 101', count: 1 },
	{ name: 'Business Law', count: 33 },
	{ name: 'Civil Litigation', count: 3 },
	{ name: 'Collections', count: 16 },
	{ name: 'Commercial Litigation', count: 2 },
];

// Create an image mapping
const imageMap = {
	img1: img1,
	img2: img2,
	img3: img3,
};

// Component to render different content types
const ContentRenderer = ({ content }) => {
	const renderText = (text) => {
		// Simple markdown-like parsing for bold text
		return text
			.split('**')
			.map((part, index) =>
				index % 2 === 1 ? <strong key={index}>{part}</strong> : part
			);
	};

	switch (content.type) {
		case 'paragraph': {
			return <p className='text-gray-700 mb-4'>{renderText(content.text)}</p>;
		}

		case 'heading': {
			const HeadingTag = `h${content.level}`;
			const headingClasses = {
				3: 'text-xl md:text-2xl font-bold text-slate-800 mb-4',
				4: 'font-bold text-gray-900 mb-3',
			};
			return (
				<HeadingTag className={headingClasses[content.level]}>
					{content.text}
				</HeadingTag>
			);
		}

		case 'image': {
			// Use imported images based on imageKey, or fall back to the first available image
			let imageSource;
			if (content.imageKey && imageMap[content.imageKey]) {
				imageSource = imageMap[content.imageKey];
			} else {
				// If no imageKey specified, cycle through available images
				const imageKeys = Object.keys(imageMap);
				const randomKey =
					imageKeys[Math.floor(Math.random() * imageKeys.length)];
				imageSource = imageMap[randomKey];
			}

			return (
				<img
					src={imageSource}
					alt={content.alt}
					className='w-full h-64 object-cover rounded mb-8'
				/>
			);
		}

		case 'section': {
			return (
				<div className='mb-6'>
					<h4 className='font-bold text-gray-900 mb-3'>{content.title}</h4>
					<div className='space-y-2 text-gray-700'>
						{content.items.map((item, index) => (
							<p key={index}>
								{item.label && (
									<span className='font-semibold'>{item.label}:</span>
								)}{' '}
								{renderText(item.text)}
							</p>
						))}
					</div>
				</div>
			);
		}

		case 'callout': {
			return (
				<div className='bg-gray-50 p-4 border-l-4 border-gray-300 mb-6'>
					<p className='text-gray-700'>{renderText(content.text)}</p>
				</div>
			);
		}

		case 'list': {
			const ListTag = content.ordered ? 'ol' : 'ul';
			const listClass = content.ordered
				? 'list-decimal list-inside space-y-1 ml-4'
				: 'space-y-1 text-gray-700';

			return (
				<ListTag className={listClass}>
					{content.items.map((item, index) => (
						<li key={index}>{content.ordered ? item : `• ${item}`}</li>
					))}
				</ListTag>
			);
		}

		case 'quote': {
			return (
				<div className='bg-gray-50 p-4 rounded mb-6'>
					<p className='text-gray-700 italic mb-2'>
						<strong>{content.title}</strong>
					</p>
					<p className='text-gray-600 italic text-sm'>{content.text}</p>
				</div>
			);
		}

		default: {
			return null;
		}
	}
};

// Blog Article Component
const BlogArticle = ({ blog, isFirst = false }) => (
	<article className={isFirst ? 'mb-12' : 'border-t pt-8'}>
		<h2 className='text-2xl md:text-3xl font-bold text-slate-800 mb-4'>
			{blog.title}
		</h2>

		<div className='text-sm text-gray-600 mb-6'>
			{blog.categories.map((category, index) => (
				<span key={category}>
					<span className='uppercase'>{category}</span>
					{index < blog.categories.length - 1 && <> , </>}
				</span>
			))}
		</div>

		<div className='space-y-4'>
			{blog.content.map((content, index) => (
				<ContentRenderer
					key={index}
					content={content}
				/>
			))}
		</div>
	</article>
);

// Sidebar Component
const Sidebar = () => (
	<div className='space-y-8'>
		{/* Subscribe Section */}
		<div>
			<h3 className='text-2xl font-bold text-slate-800 mb-4'>Subscribe</h3>
			<p className='text-gray-600 mb-6'>
				Enter your email to receive new blog posts and other communications from
				Wager, Falconer & Judd, LTD.
			</p>
			<button className='bg-slate-800 text-white px-6 py-3 font-semibold hover:bg-slate-700 transition duration-200'>
				Subscribe →
			</button>
		</div>

		{/* Topics Section */}
		<div>
			<h3 className='text-2xl font-bold text-slate-800 mb-4'>Topics</h3>
			<div className='space-y-2 text-gray-600'>
				{topicsData.map((topic, index) => (
					<div key={index}>
						{topic.name} ({topic.count})
					</div>
				))}
			</div>
		</div>
	</div>
);

// Main Component
const Perspectives = () => {
	return (
		<>
			<Hero title='Perspectives' />
			<div className='max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12'>
				{/* Main Content */}
				<div className='lg:col-span-2'>
					{/* Intro Text */}
					<div className='mb-12 text-gray-600'>
						<p className='mb-4'>
							Sometimes all you need to navigate the legal landscape is a little
							information.
						</p>
						<p>
							Our blogs and articles touch on a wide spectrum of legal matters
							that can pop up in both business and everyday life, and we hope
							they'll shed a little light wherever you happen to need it.
						</p>
					</div>

					{/* Blog Articles */}
					{blogData.map((blog, index) => (
						<BlogArticle
							key={blog.id}
							blog={blog}
							isFirst={index === 0}
						/>
					))}
				</div>

				{/* Sidebar */}
				<Sidebar />
			</div>
		</>
	);
};

export default Perspectives;
