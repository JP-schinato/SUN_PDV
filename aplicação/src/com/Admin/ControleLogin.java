package com.Admin;

import java.util.*;

public class ControleLogin {
    public String CargoADM = "Cargo Administador";
    public String CargoMOD = "Cargo Moderador";
    public String CargoFUN = "Cargo funcionario";
    public int QTDA, QTDM, QTDF;

    HashMap<Integer, String> cargos = new HashMap<>();

    public ControleLogin() {
        cargos.put(QTDA, CargoADM);
        cargos.put(QTDM, CargoMOD);
        cargos.put(QTDF, CargoFUN);
    }

    public String getCargo(int codigo) {
        return cargos.getOrDefault(codigo, "Cargo não encontrado");
    }
}