package com.proyect.real_cartelera.back_end.configuracion;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SuppressWarnings("unused")
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
<<<<<<< HEAD
                .allowedOrigins("http://18.228.4.97:3000", "http://192.168.1.34:3000", "http://192.168.1.38:3000") // Permitir tu laptop y celular
=======
                .allowedOrigins("http://localhost:3000", "http://192.168.1.34:3000", "http://192.168.1.38:3000") // Permitir tu laptop y celular
>>>>>>> 577ae14 (casi listo)
                // Permite las solicitudes desde tu frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos permitidos
                .allowedHeaders("*") // Permitir todos los encabezados
                .allowCredentials(true); // Permitir credenciales si es necesario
    }
}
