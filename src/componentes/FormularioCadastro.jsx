import React from "react"
import { Button, FormControl, FormControlLabel, Switch, TextField } from "@mui/material"
function FormularioCadastro(){
    return(
        <form>
            <TextField
             id="nome"
             label="Nome"
             variant="outliend"
             margin="normal"
             fulllWidth
            />
            <TextField
             id="sobrenome"
             label="Sobrenome"
             variant="outliend"
             margin="normal"
             fulllWidth
            />
            <TextField
             id="CPF"
             label="CPF"
             variant="outliend"
             margin="normal"
             fulllWidth
            />
            <FormControlLabel
            label="Promoções"
            control={<Switch name="promoções" defaultChecked color="primary"/>}
            />
            <FormControlLabel
              label="Novidades"
              control={<Switch name="promoções" defaultChecked color="primary"/>}
            />
            <Button type="Submit" variant="contained" color="primary">

            </Button>
        </form>
    )
}

export default FormularioCadastro