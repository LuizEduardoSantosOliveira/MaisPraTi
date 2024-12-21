package main;
import java.util.Scanner;

public class lesson4 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);


        System.out.print("Digite um número inteiro: ");
        String numero = scanner.nextLine();


        String numeroInvertido = "";

        // Laço para inverter o número
        for (int i = numero.length() - 1; i >= 0; i--) {
            numeroInvertido += numero.charAt(i);
        }


        System.out.println("Número invertido: " + numeroInvertido);


        scanner.close();
    }
}
