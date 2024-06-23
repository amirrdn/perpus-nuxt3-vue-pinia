import { Router } from "express";
import { verifyToken } from "./utils/VerifyToken";
import { Register, Login, UpdateUsers, DeleteUsers, getAlluser, getRoles } from "./controller/auth.controller";
import { InsertBooks, getAllBooks, UpdateBooks, DeleteBooks, getDetailBooks } from "./controller/book.controller";
import { InsertInventories } from "./controller/inventory.controller";
import { InsertTransaction, UpdateTransaction, DeleteTransactions, DetailData, transactionList } from "./controller/transaction.controller";

const router = Router();

router.post('/register', Register);
router.post('/auth/login', Login);

router.put('/users/update', verifyToken, UpdateUsers);
router.delete('/users/delete', verifyToken, DeleteUsers);
router.get('/users/get-all', verifyToken, getAlluser);
router.get('/roles', verifyToken, getRoles)

router.post('/book/insert', verifyToken, InsertBooks);
router.get('/book/get-book', verifyToken, getAllBooks);
router.put('/book/update', verifyToken, UpdateBooks)
router.delete('/book/destroy', verifyToken, DeleteBooks)
router.post('/book/detail', verifyToken, getDetailBooks)

router.post('/transaction/insert', verifyToken, InsertTransaction)
router.put('/transaction/update', verifyToken, UpdateTransaction)
router.delete('/transaction/delete', verifyToken, DeleteTransactions)
router.post('/transaction/detail', verifyToken, DetailData)
router.get('/transaction/list', verifyToken, transactionList)

router.post('/inventory/insert', verifyToken, InsertInventories);
export default router;