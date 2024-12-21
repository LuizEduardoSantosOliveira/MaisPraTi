package main;
import java.util.Scanner;
import java.util.Random;

public class lesson6 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);


        Random random = new Random();


        int numeroEscolhido = random.nextInt(50) + 1;


        int palpite = 0;


        System.out.println("Bem-vindo ao jogo de adivinhação!");
        System.out.println("O programa escolheu um número entre 1 e 50. Tente adivinhar.");


        while (palpite != numeroEscolhido) {

            System.out.print("Digite seu palpite: ");
            palpite = scanner.nextInt();


            if (palpite < numeroEscolhido) {
                System.out.println("Errado! O número escolhido é maior.");
            } else if (palpite > numeroEscolhido) {
                System.out.println("Errado! O número escolhido é menor.");
            }
        }


        System.out.println("Parabéns! Você acertou o número!");


        scanner.close();
    }
}
