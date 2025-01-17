import styled from 'styled-components';

const StyledFormContainer = styled.div`
	padding: 100px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const StyledErrorMessage = styled.span`
	color: red;
	font-weight: bold;
	font-size: 12px;
`;

const StyledInputQuery = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
	border: 1px solid black;
	padding: 10px;
	width: auto;
	border-radius: 5px;
`;

const StyledInpuntTerms = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
`;

export {
	StyledErrorMessage,
	StyledForm,
	StyledFormContainer,
	StyledInpuntTerms,
	StyledInputContainer,
	StyledInputQuery
};
