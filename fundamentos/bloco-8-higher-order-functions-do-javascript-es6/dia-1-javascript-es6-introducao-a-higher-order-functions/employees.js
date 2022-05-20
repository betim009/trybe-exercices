const newEmployees = (employeeEmailGenerator) => {
    const employees = { // os funcionairos
      // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id1: employeeEmailGenerator('Pedro Guerra'), 
      // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id2: employeeEmailGenerator('Luiza Drumond'),
      // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
      id3: employeeEmailGenerator('Carla Paiva'), 
    }
    return employees;
  };

const employeeEmailGenerator = (employee) => { // funcionario como parametro
    // const email = employee; //{ id1: 'Pedro Guerra', id2: 'Luiza Drumond', id3: 'Carla Paiva' }
    // return email

    // const email = employee.toLowerCase() // { id1: 'pedro guerra', id2: 'luiza drumond', id3: 'carla paiva' }
    // return email

    // const email = employee.toLowerCase().split(' '); // { id1: [ 'pedro', 'guerra' ], id2: [ 'luiza', 'drumond' ], id3: [ 'carla', 'paiva' ] }
    // return email;

    const email = employee.toLowerCase().split(' ').join('_');
    // return email;
    return { employee, email:`${email}@betrybe.com` }


}

console.log(newEmployees(employeeEmailGenerator))