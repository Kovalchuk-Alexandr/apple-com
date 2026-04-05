import styles from './style.module.css';

const Button = ({ title, type, link }) => {

	let additionalClass = '';
	if (type === 'outline') {
		additionalClass = styles['button--outline'];
	}

	return (
		<a href={link} className={`${styles.button} ${additionalClass}`}>
			{title}
		</a>
	);
}

export default Button;
