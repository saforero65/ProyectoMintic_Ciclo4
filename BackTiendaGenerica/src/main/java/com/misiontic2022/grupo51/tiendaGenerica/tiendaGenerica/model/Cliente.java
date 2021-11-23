package com.misiontic2022.grupo51.tiendaGenerica.tiendaGenerica.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Clientes")
public class Cliente {
	
	@Id
	private String id;
	
	private Long cedula;
	private String nombrecompleto;
	private String direccion;
	private Long telefono;
	private String correo;
	
	
	public Cliente() {
		// TODO Auto-generated constructor stub
	}
	
	public Cliente(Long cedula, String nombrecompleto, String direccion, Long telefono, String correo) {
		super();
		this.cedula = cedula;
		this.nombrecompleto = nombrecompleto;
		this.direccion = direccion;
		this.telefono = telefono;
		this.correo = correo;
	}




	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public Long getCedula() {
		return cedula;
	}


	public void setCedula(Long cedula) {
		this.cedula = cedula;
	}


	public String getNombrecompleto() {
		return nombrecompleto;
	}


	public void setNombrecompleto(String nombrecompleto) {
		this.nombrecompleto = nombrecompleto;
	}


	public String getDireccion() {
		return direccion;
	}


	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}


	public Long getTelefono() {
		return telefono;
	}


	public void setTelefono(Long telefono) {
		this.telefono = telefono;
	}


	public String getCorreo() {
		return correo;
	}


	public void setCorreo(String correo) {
		this.correo = correo;
	}


		
		
	
}
