import React from 'react'

function FilterGender() {
    return (
        <div className="FilterGender">
            <fieldset>
                <legend>Gênero</legend>

                <div>
                    <input type="checkbox" name="gender" id="gender-masculino" value="masculino" />
                    <label htmlFor="gender-masculino">Masculino</label>
                </div>

                <div>
                    <input type="checkbox" name="gender" id="gender-feminino" value="feminino" />
                    <label htmlFor="gender-feminino">Feminino</label>
                </div>

                <div>
                    <input type="checkbox" name="gender" id="gender-unisex" value="unisex" />
                    <label htmlFor="gender-unisex">Unisex</label>
                </div>
            </fieldset>
        </div>
    )
}

export default FilterGender
