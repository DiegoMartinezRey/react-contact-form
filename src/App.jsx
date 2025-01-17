import { useForm } from 'react-hook-form';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const onSubmit = data => console.log(data);

	console.log(watch('firtName'));

	console.log(errors.firstName);

	return (
		<div>
			<GlobalStyles />
			<h1>Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor='firstName'>First name</label>
					<input
						{...register('firstName', {
							required: { value: true, message: 'Error required' },
							maxLength: { value: 10, message: 'Error lenght' }
						})}
						type='text'
						id='firstName'
					/>
					{errors.firstName && <span>{errors.firstName.message}</span>}
				</div>
				<div>
					<label htmlFor='lastName'>Last name</label>
					<input
						{...register('lastName', { required: true })}
						type='text'
						id='lastName'
					/>
					{errors.lastName && <span>This field is required</span>}
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						{...register('email', { required: true })}
						type='email'
						id='email'
					/>
					{errors.email && <span>This field is required</span>}
				</div>
				<div>
					<input
						{...register('query', { required: true })}
						type='radio'
						name='query'
						id='enquiry'
					/>
					<label htmlFor='enquiry'>General Enquiry</label>
				</div>
				<div>
					<input
						{...register('query', { required: true })}
						type='radio'
						name='query'
						id='Request'
					/>
					<label htmlFor='Request'>Support Request</label>
				</div>
				<div>
					<label htmlFor='message'>Message</label>
					<input
						{...register('message', { required: true })}
						type='text'
						id='message'
					/>
				</div>
				<div>
					<input
						{...register('terms', { required: true })}
						type='checkbox'
						name='terms'
						id='terms'
					/>
					<label htmlFor='terms'>
						I consent to being contacted by the team
					</label>
				</div>
				<input type='submit' />
			</form>
		</div>
	);
};

export default App;
