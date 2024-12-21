package main;

import java.util.Scanner;

import java.util.Arrays;

public class lesson5 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);


        System.out.print("Digite a primeira palavra: ");
        String palavra1 = scanner.nextLine();

        System.out.print("Digite a segunda palavra: ");
        String palavra2 = scanner.nextLine();


        if (saoAnagramas(palavra1, palavra2)) {
            System.out.println("As palavras são anagramas.");
        } else {
            System.out.println("As palavras não são anagramas.");
        }


        scanner.close();
    }


    public static boolean saoAnagramas(String palavra1, String palavra2) {

        if (palavra1.length() != palavra2.length()) {
            return false;
        }


        char[] chars1 = palavra1.toCharArray();
        char[] chars2 = palavra2.toCharArray();


        Arrays.sort(chars1);
        Arrays.sort(chars2);

        return Arrays.equals(chars1, chars2);
    }
}
