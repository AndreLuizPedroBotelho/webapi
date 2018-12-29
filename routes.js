module.exports = function(router){
    router.get('/',(req,res) =>res.json({
        message:'Funcionado'
    }))
    
    router.get('/clientes',(req,res) =>global.db.findCustomers((err,docs)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(docs);
        }
    }))
    
    router.get('/clientes/:id',(req,res) =>global.db.findCustomer(req.params.id,(err,docs)=>{
        if(err){
            res.status(500).json(err);
        }else{
            (docs !== null)?res.json(docs):res.json('Usuário não existe!');
        }
    }))

    router.post('/clientes', (req,res) =>{
        const customer = req.body; 
        global.db.insertCustomer(customer, (err,result)=>{
            if(err){
                res.status(500).json(err);
            }else{
                res.json({message:'Cliente cadastrado com sucesso!'});
            }
        })
    })

    router.put('/clientes/:id', (req,res) =>{
        const id = req.params.id; 
        const customer = req.body; 
        global.db.updateCustomer(id, customer, (err,result)=>{
            if(err){
                res.status(500).json(err);
            }else{
                res.json({message:'Cliente atualizado com sucesso!'});
            }
        })
    })

    router.patch('/clientes/:id', (req,res) =>{
        const id = req.params.id; 
        const updates = req.body; 
        global.db.patchCustomer(id, updates, (err,result)=>{
            if(err){
                res.status(500).json(err);
            }else{
                res.json({message:'Cliente atualizado com sucesso!'});
            }
        })
    })

    router.delete('/clientes/:id', (req,res) =>{
        const id = req.params.id; 
        global.db.deleteCustomer(id, (err,result)=>{
            if(err){
                res.status(500).json(err);
            }else{
                res.json({message:'Cliente deletado com sucesso!'});
            }
        })
    })

};