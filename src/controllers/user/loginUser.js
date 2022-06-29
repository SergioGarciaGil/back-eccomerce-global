<<<<<<< HEAD

=======
>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba
const { Router } = require('express');

const bcrypt= require('bcrypt');
const moment=require('moment');
<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const userSchema = require('../../models/user');
const alert =require('alert')


const loginUser=async (req,res)=>{ 
//    console.log(req.body);
    let Username=req.body.Username;
    let email=req.body.email;
    let password=req.body.password; 
//     console.log(email,password,Username);
    let user = await userSchema.findOne({email:email});

    if(!user){
        return res.status(400).json({message:"Correo o Password no validos"}) 
    }


//     if(!bcrypt.compareSync(password,user.password)){
//        alert("Password Incorrecta")
//        res.status(400);
//     }
    //const igual=bcrypt.compareSync(password,user.password);

    console.log(user) 
    let role = user.role;

    let mailencontraddo= await userSchema.findOne({email : email});
    let usernameexiste= await userSchema.findOne({Username:Username});
    let passwexiste=await userSchema.findOne({password:password});
    if(mailencontraddo){ 
            console.log('email correcto ')
            // console.log(igual);
             
             //passwexiste=true;
               if(usernameexiste){
                       console.log('Username correto')
                            if( passwexiste){   
                                                
                                
                                     res.status(200).json({
                                        token: createToken(user),
                                        user:{
                                                email,role,Username
                                        }


                                });


                                     alert('Usuario Registrado');
                                     

                            }else{
                                    alert('la password  no es correcta ') ;
                                    return false;
                            }
               }else{
                  alert('El Username no existe  ') ;
                  return false;
               }
        
        
      }else{
            alert('el email no existe ');
            return false;
      };
 


            
         function createToken (user){   //creo el token
             const token =  jwt.sign(
                      {
                        Username:user.Username.toString(),
                        email:user.email.toString()        
                      },
                      'clave secreta',
                      {expiresIn:'30d'}
                )
                return token

         };
         
         
=======
const jwt = require('jwt-simple');
const userSchema = require('../../models/user');



const loginUser=async (req,res)=>{ 
   // let {Username,email,password}=req.body;
    let email=req.body.email;
    let password=req.body.password;
    let Username=req.body.Username; 
    console.log(email,password,Username);
    let user= await userSchema.find({Username : req.body.Username});
    //let passw= user[0].password;
    //console.log(user[0].password);
    if(user){
       const igual=bcrypt.compareSync(password,user[0].password);
      //let igual =true;
      console.log(igual);
       console.log(password,user[0].password);
       console.log(Username,user[0].Username);
       console.log(email,user[0].email);

       if(user[0].Username === Username && igual && user[0].email === email){
          res.status(200).json({success: createToken(user)});
         //res.json('hola')
 
       }else{
       return  res.status(404).json('error de usuario o password');
       }
    }else{
       return  res.status(404).json('error de usuario o password');
    };
 
 function createToken (user){   //creo el token
     const payload={
             password:user[0].password,
             email:user[0].email,
             createdAt:moment().unix(),
             expiredAt:moment().add(30,'minutes').unix()
     }
     return jwt.encode(payload,'clave secreta');

};
>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba


}

<<<<<<< HEAD





=======
>>>>>>> 51d060088fcf51c41103bce252701db6ecd4b1ba
module.exports = loginUser;