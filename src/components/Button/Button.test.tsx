import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from ".";

describe('Button Test', () => {
    test('should render button', () => {
        render(<Button text="Test Text" />)

        expect(screen.getByText("Test Text")).toBeDefined();
    })
})