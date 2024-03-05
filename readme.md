# Week 2 - Challenge 2

## Métodos de strings

Implementa como funciones los metodos de strings que se describen a continuación. No puedes usar los métodos nativos de strings excepto - charCodeAt(pos: number): Devuelve el valor Unicode del carácter en la posición indicada.

Todas las funciones deben estar en un modulo, e.g. strings.js y exportarse y probarse en otro archivo, e.g. index.js.

- length: Devuelve la longitud del string.

- substring(start: number, end: number): Devuelve un nuevo string que es una subcadena del original, desde la posición start hasta la end. Si end no se indica, se toma hasta el final.

- indexOf(substring: string): Devuelve la posición de la primera ocurrencia de la subcadena en el string. Si no se encuentra, devuelve -1.

- includes(substring: string): Devuelve true si la subcadena se encuentra en el string, false en caso contrario.

- startsWith(substring: string): Devuelve true si el string comienza con la subcadena, false en caso contrario.

- endsWith(substring: string): Devuelve true si el string termina con la subcadena, false en caso contrario.

- lastIndexOf(substring: string): Devuelve la posición de la última ocurrencia de la subcadena en el string. Si no se encuentra, devuelve -1.

- toUpperCase: Devuelve el string en mayúsculas.

- toLowerCase: Devuelve el string en minúsculas.

- charAt(pos: number): Devuelve el carácter en la posición indicada.

- concat(str2: string): Devuelve un nuevo string que es la concatenación de ambos.

- slice(start: number, end: number): Devuelve un nuevo string que es una subcadena del original, desde la posición start hasta la end. Si end no se indica, se toma hasta el final.

- replace(substring: string, newSubstring: string): Devuelve un nuevo string que es el resultado de reemplazar la primera ocurrencia de la subcadena por la nueva subcadena.

- replaceAll(substring: string, newSubstring: string): Devuelve un nuevo string que es el resultado de reemplazar todas las ocurrencias de la subcadena por la nueva subcadena.

- split(separator: string): Devuelve un array de strings que son el resultado de dividir el string original en base al separador indicado.

- trim(): Devuelve un nuevo string que es el resultado de eliminar los espacios en blanco al principio y al final del string.

- padStart(length: number, fillString: string): Devuelve un nuevo string que es el resultado de rellenar el string original con el fillString hasta alcanzar la longitud indicada.

- padEnd(length: number, fillString: string): Devuelve un nuevo string que es el resultado de rellenar el string original con el fillString hasta alcanzar la longitud indicada.

- repeat(times: number): Devuelve un nuevo string que es el resultado de repetir el string original las veces indicadas.

- trimStart(): Devuelve un nuevo string que es el resultado de eliminar los espacios en blanco al principio del string.

- trimEnd(): Devuelve un nuevo string que es el resultado de eliminar los espacios en blanco al final del string.

- toString(): Devuelve el string.

- valueOf(): Devuelve el string.
