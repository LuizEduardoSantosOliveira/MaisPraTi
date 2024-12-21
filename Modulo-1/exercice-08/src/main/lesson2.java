package main;

import java.util.Scanner;

public class lesson2 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);


        System.out.print("Digite uma palavra: ");
        String palavra = scanner.nextLine();


        palavra = palavra.toLowerCase();


        boolean ehPalindromo = true;


        for (int i = 0; i < palavra.length() / 2; i++) {

            if (palavra.charAt(i) != palavra.charAt(palavra.length() - 1 - i)) {
                ehPalindromo = false;
                break;
            }
        }


        if (ehPalindromo) {
            System.out.println("A palavra é um palíndromo!");
        } else {
            System.out.println("A palavra não é um palíndromo.");
        }


        scanner.close();
    }
}

