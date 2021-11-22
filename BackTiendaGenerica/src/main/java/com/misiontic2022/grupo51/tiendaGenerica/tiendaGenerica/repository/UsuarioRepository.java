package com.misiontic2022.grupo51.tiendaGenerica.tiendaGenerica.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.misiontic2022.grupo51.tiendaGenerica.tiendaGenerica.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario,String>{

	List<Usuario> findByUsername(String username);
	List<Usuario> findByNombrecompleto(String nombrecompleto);
	
	
}
