package com.misiontic2022.grupo51.tiendagenerica.tiendagenerica.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.misiontic2022.grupo51.tiendagenerica.tiendagenerica.model.Cliente;

public interface ClienteRepository extends MongoRepository<Cliente, String>{
	
	List<Cliente> findByCedula(Long cedula);
	
	List<Cliente> findByNombrecompleto(String nombrecompleto);
	

}