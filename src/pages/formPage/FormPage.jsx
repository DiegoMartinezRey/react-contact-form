import { useForm } from 'react-hook-form';
import {
	StyledErrorMessage,
	StyledForm,
	StyledFormContainer,
	StyledInpuntTerms,
	StyledInputContainer,
	StyledInputQuery
} from './formPage.styles';

const FormPage = () => {
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors }
	} = useForm();

	const onSubmit = data => console.log(data);
	return (
		<StyledFormContainer>
			<h1>Form</h1>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledInputContainer>
					<label htmlFor='firstName'>First name</label>
					<input
						{...register('firstName', {
							required: { value: true, message: 'Error required' },
							maxLength: { value: 10, message: 'Error lenght' }
						})}
						type='text'
						id='firstName'
					/>
					{errors.firstName && (
						<StyledErrorMessage>{errors.firstName.message}</StyledErrorMessage>
					)}
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor='lastName'>Last name</label>
					<input
						{...register('lastName', {
							required: { value: true, message: 'Error required' },
							maxLength: { value: 10, message: 'Error lenght' }
						})}
						type='text'
						id='lastName'
					/>
					{errors.lastName && (
						<StyledErrorMessage>{errors.lastName.message}</StyledErrorMessage>
					)}
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor='email'>Email</label>
					<input
						{...register('email', {
							required: { value: true, message: 'Error required' },
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Enter a valid email address'
							}
						})}
						type='text'
						id='email'
					/>
					{errors.email && (
						<StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
					)}
				</StyledInputContainer>
				<StyledInputContainer>
					<span>Query type</span>
					<StyledInputQuery>
						<input
							{...register('query', {
								required: { value: true, message: 'Error required' }
							})}
							type='radio'
							name='query'
							id='enquiry'
						/>
						<label htmlFor='enquiry'>General Enquiry</label>
					</StyledInputQuery>
					<StyledInputQuery>
						<input
							{...register('query', {
								required: { value: true, message: 'Error required' }
							})}
							type='radio'
							name='query'
							id='Request'
						/>
						<label htmlFor='Request'>Support Request</label>
					</StyledInputQuery>
					{errors.query && (
						<StyledErrorMessage>{errors.query.message}</StyledErrorMessage>
					)}
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor='msg'>Message</label>
					<input
						{...register('msg', {
							required: { value: true, message: 'Error required' },
							maxLength: { value: 100, message: 'Error lenght' }
						})}
						type='text'
						id='msg'
					/>
					{errors.msg && (
						<StyledErrorMessage>{errors.msg.message}</StyledErrorMessage>
					)}
				</StyledInputContainer>
				<StyledInpuntTerms>
					<input
						{...register('terms', {
							required: { value: true, message: 'Error required' }
						})}
						type='checkbox'
						name='terms'
						id='terms'
					/>
					<label htmlFor='terms'>
						I consent to being contacted by the team
					</label>
					{errors.terms && (
						<StyledErrorMessage>{errors.terms.message}</StyledErrorMessage>
					)}
				</StyledInpuntTerms>

				<input type='submit' />
			</StyledForm>
		</StyledFormContainer>
	);
};

export default FormPage;
