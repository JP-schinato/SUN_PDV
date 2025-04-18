package com.br;

import javafx.application.Application;
import static javafx.application.Application.launch;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class TelaLogin extends Application {


    @Override
    public void start(Stage stage) {
        GridPane gridPane = new GridPane();
        gridPane.setMinSize(400, 200);
        gridPane.setPadding(new Insets(10));
        gridPane.setVgap(5);
        gridPane.setHgap(5);
        gridPane.setAlignment(Pos.CENTER);
        Scene scene  = new Scene(gridPane);
        scene.getStylesheets().add(getClass().getResource("/Style/LoginGeral.css").toExternalForm());
        
        Text text1 = new Text("Email");
        TextField inputEmail = new TextField();

        Text text2 = new Text("Password");
        TextField inputSenha = new PasswordField(); 

        Button buttonEnviar = new Button("Submit");
        Button buttonLimpar = new Button("Clear");

        buttonEnviar.setId("enviar");
        
    }

    public static void main(String[] args) {
        launch(args);
    }
}
