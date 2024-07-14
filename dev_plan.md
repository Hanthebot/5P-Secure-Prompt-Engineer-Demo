Last updated: 21:35 Jul 40, 2024 (HKT; GMT+8).

# Plan for Development

## Checklist
### Initial setting
- [x] Build project structure
- [x] Come up with [workflow](#general-workflow)
- [x] Come up with [rough design](#design-plan) / interface
- [ ] Implement general structure & functions
### Gen AI Connection
- [x] OpenAI / Gemini API research
- [ ] Integrate API into application
- [ ] Finalize the prompt
### Design & final work
- [ ] Finalize design
- [ ] Post it on web

# General Workflow
## Entities
 * ### User
   * Stores
     * Digital key pair
     * Persona
 * ### Prompt engineer (Gemini)
 * ### Decryptor (website)
## Persona
* ### File structure
    ```json 
    {
        "persona": "<persona_id>",
        "public_key": RSA.public_key,
        "last_update": 120402303,
        "data_hash": hash(self.data),
        "fields": RSA.encrypt(self.data.keys()),
        "data": RSA.encrypt({
            "self": RSA.encrypt(["American", "male", "California"]),
            "hobby": RSA.encrypt(["soccer", "coke"]),
            "study": RSA.encrypt(["uni student", "year 4", "engineering"])
            ...
        })
    }
    ```
* ### Conversation steps
  0. [User] Persona is selected
  1. [User] Raw prompt, which includes personal information is sent
     1. along with decrypted `fields` section
  2. Gen AI analyzes the prompt, and recommends additional data fields to be shared
  3. [User] Selects which fields to include, and send their decryption to Gen AI
  4. Gen AI outputs prompt that is created from, but not revealing, private information
  5. Gen AI provides additional fields to be added to persona
  6. [Decyptor] decrypts corresponding fields, add information, and updates the persona
  
# Design plan
   ## Gen AI interaction
   ## Decryptor
* On a separate page
* Works only within frontend, no data being sent to backend 

## Remarks
- N/A so far (Jul 14, 2024)