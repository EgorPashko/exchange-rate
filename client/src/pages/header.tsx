import React from 'react';
import styled from 'styled-components';

const Styled = {
	Header: styled.header`
		height: 50px;
		background-color: rgb(250, 249, 197);
	`,
};

export const Header = () => {
	return (
		<Styled.Header>
			<div>1</div>
			<div>2</div>
			<div>3</div>
		</Styled.Header>
	);
};
