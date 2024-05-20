/*
  Warnings:

  - The `tipo` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PerfilUsuarioEnum" AS ENUM ('PERFIL_ADMIN', 'PERFIL_COMUM');

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "PerfilUsuarioEnum" DEFAULT 'PERFIL_COMUM';
