package main;

import java.util.Scanner;

public class lesson1 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);


        System.out.print("Digite o primeiro número: ");
        double numero1 = scanner.nextDouble();


        System.out.print("Digite o segundo número: ");
        double numero2 = scanner.nextDouble();


        System.out.print("Digite o operador (+, -, *, /): ");
        char operador = scanner.next().charAt(0);


        double resultado;


        switch (operador) {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':

                if (numero2 != 0) {
                    resultado = numero1 / numero2;
                } else {
                    System.out.println("Erro: Divisão por zero!");
                    return;
                }
                break;
            default:
                System.out.println("Operador inválido!");
                return;
        }

        // Exibe o resultado
        System.out.println("Resultado: " + resultado);

        // Fecha o scanner
        scanner.close();
    }
}
