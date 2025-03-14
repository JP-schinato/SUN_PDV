import java.util.Scanner;

public class App {

    public static void main(String[] args) throws Exception {
        /*
        *  Dev: JPMendes
        *  Ação: ligar páginas "DatabaseConnection" e "UserDAO"
        */
        UserDAO userDAO = new UserDAO();
        userDAO.listUsers();

        /* 
        *  Dev: JPMendes
        *  Ação: ativar e criar variável para o Scanner
        */ 
        Scanner myObj = new Scanner(System.in);
        Scanner myInt = new Scanner(System.in);

        /* 
        *  Dev: JPMendes
        *  Ação: Verificar se o código de barras existe
        *  Colocar: busca do código de barras no banco de dados
        */ 

        String cod_ja_registrado = "395023423"; // Supomos um valor do banco

        // Entrada do código de barras
        System.out.println("Informe o código de barras");
        String cod_barras = myObj.nextLine();
        System.out.println("Confirme seu código: " + cod_barras);

        System.out.println("Confirme seu código de barras");
        System.out.println("(y) - para confirmar.");
        System.out.println("(n) - para negar");
        String confirm = myObj.nextLine();

        if (confirm.equals("y")) {
            // Verificar se o código de barras já está registrado
            if (cod_barras.equals(cod_ja_registrado)) {
                System.out.println("Produto já foi cadastrado.");
            } else {
                System.out.println("Código de barras não reconhecido.");

                System.out.println("Deseja registrar esse produto? (y) para sim, (n) para não.");
                String confirm_reg_prod = myObj.nextLine();

                if (confirm_reg_prod.equals("y")) {
                    System.out.println("Coloque o nome do produto:");
                    String reg_prod_name = myObj.nextLine();

                    System.out.println("Coloque o preço do produto:");
                    Double reg_prod_preco = myInt.nextDouble();

                    // Mostra os dados
                    System.out.println("\nCódigo de barras: " + cod_barras);
                    System.out.println("Nome: " + reg_prod_name);
                    System.out.println("Preço: " + reg_prod_preco);

                    System.out.println("\nConfirmar?  (y) para sim, (n) para não.");
                    String confirm_fim_reg_prod = myObj.nextLine();

                    if (confirm_fim_reg_prod.equals("y")) {
                        // Aqui deveria ser inserido no banco de dados
                        System.out.println("Seu produto foi registrado no banco de dados.");
                        userDAO.insertProduct(cod_barras, reg_prod_name, reg_prod_preco); // Erro até conecção do bd
                    } else if (confirm_fim_reg_prod.equals("n")) {
                        System.out.println("Registro cancelado.");
                    }
                }
            }
        } else if (confirm.equals("n")) {
            System.out.println("Operação cancelada :)");
        } else {
            System.out.println("Operação inválida.");
        }

        // Fechando scanners
        myObj.close();
        myInt.close();
    }
}
