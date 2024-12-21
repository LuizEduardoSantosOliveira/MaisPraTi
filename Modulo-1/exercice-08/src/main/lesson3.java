package main;

public class lesson3 {
    public static void main(String[] args) {

        int n = 10;  // Número de elementos a exibir da sequência de Fibonacci

            System.out.println("Sequência de Fibonacci com " + n + " números:");


            long a = 1, b = 1;

            for (int i = 1; i <= n; i++) {

                System.out.print(a + " ");


                long next = a + b;
                a = b;
                b = next;
            }
            System.out.println();

    }
}


