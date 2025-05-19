package com.nxtc.nxtc_api.dtos;

import java.util.Optional;

public record ChangeContactInfoDTO(Optional<String> name, Optional<String> email, Optional<String> telephone, Optional<String> cellphone, Optional<Boolean> favorite, Optional<Boolean> active) {

}
