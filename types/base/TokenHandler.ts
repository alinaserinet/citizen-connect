import type Token from './Token';

type TokenHandler = () => Promise<Token> | Token;

export default TokenHandler;
