import Validation from "../Auth/Validation"
import {describe,expect,it} from 'vitest'

describe('Validation function', () => {
    it('returns "all fields are required" when email or password is missing', () => {
        expect(Validation('', 'password', 'password')).toBe('all fields are required');
    });

    it('should return "Enter valid email and password"', () => {
        expect(Validation('ayush@example.com', 'Ayush@2000', 'Ayush@2000')).toBe(null)
    })
});