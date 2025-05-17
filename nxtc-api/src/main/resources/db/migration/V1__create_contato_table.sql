CREATE TABLE Contato(
    contato_id SERIAL PRIMARY KEY,
    contato_nome VARCHAR(100),
    contato_email VARCHAR(255),
    contato_celular VARCHAR(11),
    contato_telefone VARCHAR(10),
    contato_sn_favorito BOOLEAN,
    contato_sn_ativo BOOLEAN,
    contato_dh_cad TIMESTAMP WITHOUT TIME ZONE
);
