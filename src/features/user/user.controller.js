// import UserModel from './user.model.js';
// import jwt from 'jsonwebtoken';
// import UserRepository from './user.repository.js';

// export default class UserController {

//   constructor(){
//     this.userRepository = new UserRepository();
//   }
  
//   async signUp(req, res) {
//     const {
//       name,
//       email,
//       password,
//       type,
//     } = req.body;


//     const user = new UserModel(
//       name,
//       email,
//       password,
//       type
//     );
//     await this.userRepository.signUp(user);
//     res.status(201).send(user);
//   }

//   signIn(req, res) {
//     const result = UserModel.signIn(
//       req.body.email,
//       req.body.password
//     );
//     if (!result) {
//       return res
//         .status(400)
//         .send('Incorrect Credentials');
//     } else {
//       // 1. Create token.
//       const token = jwt.sign(
//         {
//           userID: result.id,
//           email: result.email,
//         },
//         'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
//         {
//           expiresIn: '1h',
//         }
//       );

//       // 2. Send token.
//       return res.status(200).send(token);
//     }
//   }
// }




import jwt from 'jsonwebtoken';
import UserRepository from './user.repository.js';

export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();

    // Ensure `this` is bound if you ever pass methods directly as handlers
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  async signUp(req, res, next) {
    try {
      const { name, email, password, type } = req.body;

      const user = {
        name,
        email,
        password, // ⚠️ consider hashing later
        type
      };

      const saved = await this.userRepository.signUp(user);
      // Avoid sending password back
      const { password: _pw, ...safeUser } = saved;
      res.status(201).send(safeUser);
    } catch (err) {
      next(err);
    }
  }

  async signIn(req, res, next) {
    try {
      const { email, password } = req.body;

      // ✅ Use repository’s signIn
      const result = await this.userRepository.signIn(email, password);

      if (!result) {
        return res.status(400).send('Incorrect Credentials');
      }

      // Prefer Mongo _id if present
      const userId = result._id?.toString?.() || result.id;

      const token = jwt.sign(
        { userID: userId, email: result.email },
        'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
        { expiresIn: '1h' }
      );

      return res.status(200).send(token);
    } catch (err) {
      next(err);
    }
  }
}
