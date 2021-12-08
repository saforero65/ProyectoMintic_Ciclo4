package com.misiontic2022.grupo51.tiendaGenerica.tiendaGenerica.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.misiontic2022.grupo51.tiendaGenerica.tiendaGenerica.model.Consolidado;

public interface ConsolidadoRepository  extends MongoRepository<Consolidado, String>{
	
	List<Consolidado> findByCiudad(String ciudad);
}
