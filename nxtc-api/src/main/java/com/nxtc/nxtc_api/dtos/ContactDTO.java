package com.nxtc.nxtc_api.dtos;

import java.sql.Date;

public record ContactDTO(long id, String name, String email, String cellphone, String telephone, boolean favorite, boolean active, Date createdAt) {

}
