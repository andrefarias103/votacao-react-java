/*
  Warnings:

  - The `status` column on the `Sessao` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "StatusSessaoEnum" AS ENUM ('STATUS_AGUARDANDO', 'STATUS_INICIADA', 'STATUS_CONCLUIDA', 'STATUS_CANCELADA');

-- AlterTable
ALTER TABLE "Sessao" DROP COLUMN "status",
ADD COLUMN     "status" "StatusSessaoEnum" NOT NULL DEFAULT 'STATUS_AGUARDANDO';
