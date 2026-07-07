import { renderHook } from "@testing-library/react";
import { useResumoFilme } from "./useResumoFilme";

test("Retorna overview completo quando for menor que o máximo", () => {
    const texto = "Resumo curto";
    const {result} = renderHook(() => useResumoFilme(texto, 256));
    expect(result.current).toBe(texto);
}) 

test("Retorna overview cortado e retiências quando for maior que o máximo", () => {
    const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const {result} = renderHook(() => useResumoFilme(texto, 10));
    expect(result.current).toBe("Lorem ipsu...");
})