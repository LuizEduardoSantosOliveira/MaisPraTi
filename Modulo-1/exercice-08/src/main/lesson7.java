package main;
import java.util.Scanner;
public class lesson7 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);


        System.out.print("Digite uma frase: ");
        String frase = scanner.nextLine();


        String[] palavras = frase.split("\\s+");


        int numeroDePalavras = palavras.length;


        System.out.println("A frase contém " + numeroDePalavras + " palavras.");


        scanner.close();
    }
}

