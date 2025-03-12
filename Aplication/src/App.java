import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        /*
         * Dev: JPMendes
         * Ação: ligar páginas "DatabaseConnection" e "UserDAO"
         */
        UserDAO userDAO = new UserDAO();
        userDAO.listUsers();

        /*
         * Dev: JPMendes
         * Ação: ativar e crair variavel para o Scanner, importante para ler as informações 
         */
        Scanner myObj = new Scanner(System.in);
        Scanner myInt = new Scanner(System.in);

        /*
         * Dev: JPMendes
         * Ação: permite ver o código de barras do produto para cconferir se existe ou não
         * Colocar: transformar em uma matriz e passar os valores do banco de dados para cá
         */
        String cod_ja_registrado = "395023423";

        /*
         * Dev: JPMendes
         * Ação: início da parte visivel do código
         * Colocar: colocar um Switch que funcione direito
         */  
        System.out.println("informe o código de barras");
        String cod_barras  = myObj.nextLine();
        System.out.println("confirme seu código: " + cod_barras);

        System.out.println("confirme seu código de barras");
        System.out.println("(y) - para confirmar.");
        System.out.println("(n) - para negar");
        String confirm = myObj.nextLine();

        if ( confirm.equals("y")) {
            if (cod_barras == cod_ja_registrado) {
                System.out.println("produto já foi cadastrado");
            } else {
                System.out.println("Código de barras não reconhecido.");

                System.out.println("Deseja reistrar esse produto ? (y) para sim, (n) para não.");
                String confirm_reg_prod = myObj.nextLine();
                if (confirm_reg_prod.equals("y")) {

                    System.out.println("Coloque o nome do produto");
                        String reg_prod_name = myObj.nextLine();

                    System.out.println("Coloque o preço do produto");
                        Double reg_prod_preco = myInt.nextDouble();

                        System.out.println("");                         System.out.println("");

                        System.out.println("Código de barras: " + cod_barras);
                        System.out.println("Nome: " + reg_prod_name);
                        System.out.println("Preço: " + reg_prod_preco);

                        System.out.println("");                        System.out.println("");

                        System.out.println("Confirmar ?  (y) para sim, (n) para não.");
                        String confirm_fim_reg_prod = myObj.nextLine();

                            if (confirm_fim_reg_prod.equals("y")) {
                               System.out.println("Seu produto ja foi registrado"); 
                            } else if (confirm_fim_reg_prod.equals("n")) {
                                System.exit(0);
                            }
                }
            }

        } else if ( confirm.equals("n")) {
            System.out.println("operação canceladac :)");
            System.exit(0);
        } else {
            System.out.println("operação invalida");
        }

        myObj.close();
    }
}

